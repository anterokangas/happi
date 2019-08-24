const express = require("express");
const mongoose = require("mongoose");
const shoppingModel = require("../models/shoppingitem");
const happeningModel = require("../models/happening");


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
 * Save Happening descriptions
 */
router.post("/happenings", function(req, res) {
	let happenings = req.body
	for (let happening in happenings) {
		let item = new happeningModel(happenings[happening])
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
	happeningModel.find({"activated": true}, 
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
router.get("/happening/:title", function(req, res) {
	console.log("apirouter GET /happening")
	let title = req.params.title;
	console.log("title="+title)
	happeningModel.find({"title": title}, 
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
