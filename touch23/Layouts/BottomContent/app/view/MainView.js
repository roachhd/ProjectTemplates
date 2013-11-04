/*
 * File: app/view/MainView.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MainView', {
    extend: 'Ext.Container',
    alias: 'widget.mainview',

    config: {
        itemId: 'mainView',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'panel',
                itemId: 'contentPanel',
                items: [
                    {
                        xtype: 'label',
                        centered: false,
                        html: 'Content',
                        style: 'text-align: center; padding: 20px;'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                itemId: 'bottomBar'
            }
        ]
    }

});