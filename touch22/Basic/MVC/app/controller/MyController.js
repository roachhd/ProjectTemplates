/*
 * File: app/controller/MyController.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.MyController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            detailPanel: 'mainview #detailPanel'
        },

        control: {
            "mainview #runButton": {
                tap: 'runAction'
            }
        }
    },

    runAction: function(target) {

        // Create new model
        var model = Ext.create('model.mymodel', {
            id: 123,
            text: 'Hello World'
        });

        // Bind model to view
        this.getDetailPanel().setRecord(model);


    }

});