const express = require("express");
const mongoose = require("mongoose");
const shoppingModel = require("../models/shoppingitem");
const fullHappeningModel = require("../models/fullHappening");
const happeningModel = require("../models/happening");
const partModel = require("../models/part");
const productModel = require("../models/product");


let router = express.Router();

router.get("/shopping", function(req,res) {
	let username = req.session.username;
	let shoppingList = [];
	shoppingModel.find({"username":username}, {"type":1,"price":1,"count":1}, function(err,items) {
		console.log(items);
		if(err) {
			return res.status(404).json({"message":"not found",
										 "list":[]})
		}
		if(!items) {
			return res.status(404).json({"message":"not found",
										 "list":[]})			
		}
		return res.status(200).json(items);
	})
});

router.post("/shopping", function(req,res) {
	console.log("apirouter post shopping")
	let item = new shoppingModel({
		type:req.body.type,
		count:req.body.count,
		price:req.body.price,
		username:req.session.username
	})
	item.save(function(err,item) {
		if(err) {
			return res.status(409).json({"message":"not saved"})
		}
		if(!item) {
			return res.status(409).json({"message":"not saved"})
		}
		return res.status(200).json({"message":"success"});	
	})
});

router.delete("/shopping/:id", function(req,res) {
	shoppingModel.findById(req.params.id, function(err,item) {
		if(err) {
				return res.status(404).json({"message":"not found"});	
		}
		if(!item) {
				return res.status(404).json({"message":"not found"});	
		}
		if(req.session.username === item.username) {
			shoppingModel.deleteOne({"_id":req.params.id},function(err) {
				if(err) {
					return res.status(404).json({"message":"not found"});					
				}
				return res.status(200).json({"message":"success"})
			})
		} else {
			return res.status(403).json({"message":"not allowed"})
		} 
	})
});

router.put("/shopping/:id", function(req,res) {
	shoppingModel.findById(req.params.id, function(err,item) {
		if(err) {
				return res.status(404).json({"message":"not found"});	
		}
		if(!item) {
				return res.status(404).json({"message":"not found"});	
		}
		if(req.session.username === item.username) {
			shoppingModel.replaceOne({_id:req.params.id},{
				type:req.body.type,
				price:req.body.price,
				count:req.body.count,
				username:req.session.username
			}, function(err) {
				if(err) {
					return res.status(409).json({"message":err});					
				}
				return res.status(200).json({"message":"success"})
			})
		} else {
			return res.status(403).json({"message":"not allowed"});
		}
	})
})


/**
 * Save fullHappening descriptions
 */
router.post("/happenings", function(req, res) {
	let happenings = req.body
	for (let happening in happenings) {
		let item = new fullHappeningModel(happenings[happening])
		item.save(function(err, item) {
			if(err) {
				return res.status(409).json({"message": "not saved"})
			}
			if(!item) {
				return res.status(409).json({"message": "not saved"})
			}
		})
	}
	return res.status(200).json({"message": "success"});	
});

/**
 * Save Detailed Happenings 
 */
router.post("/detailedhappenings", function(req, res) {
	let happenings = req.body

	for (let happening in happenings) {
		let theHappening = {
			...happenings[happening],
			parts: [],
		}
		let happeningItem = new happeningModel(theHappening)
		happeningItem.save(function(err, items) {
			if(err) {
				return res.status(409).json({"message": "not saved"})
			}
			if(!items) {
				return res.status(409).json({"message": "not saved"})
			}
		})
		console.log("saved happening")
		console.log(happeningItem)

		happenings[happening].id = happeningItem._id

		if (!happenings[happening].parts) { continue }

		for (let part of happenings[happening].parts) {
			let thePart = {
				...part,
				_happening: happeningItem._id,
				products: [],
			}
			let partItem = new partModel(thePart);
			partItem.save(function(err, items) {
				if(err) {
					return res.status(409).json({"message": "not saved"})
				}
				if(!items) {
					return res.status(409).json({"message": "not saved"})
				}
			})
				
			console.log("saved part")
			console.log(partItem)

			part.id = partItem._id

			if (!part.products) { continue }

			for (let product of part.products) {
				console.log("1 product: "+product.name)
				let theProduct = {
					...product,
					_part: partItem._id,
				}
				let productItem = new productModel(theProduct);
				productItem.save(function(err, items) {
					if(err) {
						return res.status(409).json({"message": "not saved"})
					}
					if(!items) {
						return res.status(409).json({"message": "not saved"})
					}
				})
				
				console.log("saved product")
				console.log(productItem)
				
				product.id = productItem._id

				partItem.products.push(productItem._id)
			}
			console.log("2 part "+part.header+" products=")
			console.log(part.products)
			part.productids = partItem.products
			// console.log("partItem.products")
			// console.log(partItem.products)

			// partItem.save(function(err, items) {
			// 	if (err) {
			// 		return res.status(409).json({"message": "not saved"})
			// 	}
			// 	if(!items) {
			// 		return res.status(409).json({"message": "not saved"})
			// 	}
			// })
			// console.log("saved full partItem")
			// console.log(partItem)

			happeningItem.parts.push(partItem._id)
		}
		happenings[happening].partids = happeningItem.parts
		// console.log("happeningItem.parts")
		// console.log(happeningItem.parts)

		// happeningItem.save(function(err, items) {
		// 	if (err) {
		// 		return res.status(409).json({"message": "not saved"})
		// 	}
		// 	if(!items) {
		// 		return res.status(409).json({"message": "not saved"})
		// 	}
		// })
		
		// console.log("saved full happeningItem")
		// console.log(happeningItem)

		
	}
	console.log("SAVE DETAILED HAPPENINGS SUCCESS!!!!")

	// save also full happening
	console.log("SAVE NEW FULL HAPPENINGS:")
	console.log(happenings)
	for (let happening in happenings) {
		console.log("5 happening="+happenings[happening].title)
		console.log(happenings[happening].parts)
		let item = new fullHappeningModel(happenings[happening])
		item.save(function(err, item) {
			if(err) {
				return res.status(409).json({"message": "not saved"})
			}
			if(!item) {
				return res.status(409).json({"message": "not saved"})
			}
		})
	}
		
	return res.status(200).json({"message": "success"});	
});

/**
 * Get list of (activated) Happenings
 */
router.get("/happenings", function(req,res) {
	console.log("apirouter GET /happenings")
	fullHappeningModel.find({"activated": true}, 
					    function(err, items) {
		console.log("apirouter GET happenings happeningModel.find--> items=")
		console.log(items);
		if(err) {
			return res.status(404).json({"message": "not found",
										 "happeningList": []})
		}
		if(!items) {
			return res.status(404).json({"message": "not found",
										 "happeningList": []})			
		}
		return res.status(200).json(items);
	})
}); 

/**
 * Get (selectd) Happening
 */
router.get("/happening/:id", function(req, res) {
	console.log("apirouter GET /happening")
	let _id = req.params.id;
	console.log("_id="+_id)
	fullHappeningModel.find({"_id": _id}, 
					    function(err, items) {
		if(err) {
			return res.status(404).json({"message": "not found",
										 "happening": {}})
		}
		if(!items) {
			return res.status(404).json({"message":"not found",
										 "happeningList": {}})		
		}
		return res.status(200).json(items);
	})
});

module.exports = router;
