/*
 * File: app/controller/CarForm.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('CascadingSelect.controller.CarForm', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'makerField',
            selector: '#makerField'
        },
        {
            ref: 'seriesField',
            selector: '#seriesField'
        },
        {
            ref: 'modelField',
            selector: '#modelField'
        },
        {
            ref: 'doneButton',
            selector: '#doneButton'
        }
    ],

    onFormRender: function(component, eOpts) {
        
        var makerField = this.getMakerField();
        
        // Populate the maker field
        var data = Ext.getStore('Cars').getValues('maker');
            store = new Ext.data.Store({
                fields: ['id', 'value'],
                data: data
            });
        makerField.bindStore(store);
        
        // Hide later parts of the form
        this.getSeriesField().hide();
        this.getModelField().hide();
        this.getDoneButton().hide();
        
    },

    onMakerFieldChange: function(field, newValue, oldValue, eOpts) {
        // Variables, I do declare
        var seriesField = this.getSeriesField();
        
        // Special case: we chose the "choose a maker" option
        if (!newValue) {
        
            seriesField.hide();
        
        } else {
        
        
        
            // Update the series dropdown
            var data = Ext.getStore('Cars').getValues('series'),
                store = new Ext.data.Store({
                    fields: ['id', 'value'],
                    data: data
                });
            seriesField.bindStore(store);
        
            // Show the series field
            seriesField.show();
        
        }
        
        // Hide later parts of the form
        this.getModelField().hide();
        this.getDoneButton().hide();
    },

    onSeriesFieldChange: function(field, newValue, oldValue, eOpts) {
        // Variables, I do declare
        var modelField = this.getModelField();
        
        // Special case: we chose the "choose a series" option
        if (!newValue) {
        
            modelField.hide();
        
        } else {
        
            var data = Ext.getStore('Cars').getValues('model'),
                store = new Ext.data.Store({
                    fields: ['id', 'value'],
                    data: data
                });
            modelField.bindStore(store);
        
            // Show the series field
            modelField.show();
        
        }
        
        // Hide later parts of the form
        this.getDoneButton().hide();
    },

    onModelFieldChange: function(field, newValue, oldValue, eOpts) {
        if (newValue) {
            this.getDoneButton().show();
        } else {
            this.getDoneButton().hide();
        }
    },

    onButtonClick: function(button, e, eOpts) {
        var title = "That's a great car.",
            message = 'You chose a great car. Truly.';
        
        Ext.Msg.alert(title, message, Ext.emptyFn);
    },

    init: function(application) {
        this.control({
            "#form": {
                render: this.onFormRender
            },
            "#makerField": {
                change: this.onMakerFieldChange
            },
            "#seriesField": {
                change: this.onSeriesFieldChange
            },
            "#modelField": {
                change: this.onModelFieldChange
            },
            "#doneButton": {
                click: this.onButtonClick
            }
        });
    }

});
