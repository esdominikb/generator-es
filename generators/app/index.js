/*
 * This file has been created by Ergosign GmbH - All rights reserved - http://www.ergosign.de
 * DO NOT ALTER OR REMOVE THIS COPYRIGHT NOTICE OR THIS FILE HEADER.
 *
 * This file and the code contained in it are subject to the agreed contractual terms and conditions,
 * in particular with regard to resale and publication.
 */

/**
 * This class represents ...
 *
 * Class history:
 *  - 0.1: First release, working (dominikbuhl)
 *
 * @author dominikbuhl
 * @date 21.05.15
 * @constructor
 */

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	method1: function(){
		console.log("method 1");
	},
	method2: function(){
		console.log("method 2");
	}
});
