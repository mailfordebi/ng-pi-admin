export let MENU_ITEM = [
    {
        path: 'index',
        title: 'Dashboard'
    },
    {
        path: 'editor',
        title: 'Pell Editor'
    },
    {
        path: 'settings',
        title: 'Settings'
    },
    {
        path: 'profile',
        title: 'User Profile'
    },
    {
        path: 'ui',
        title: 'UI Element',
        children: [
            {
                path: 'grid',
                title: 'Bootstrap Grid'
            },
            {
                path: 'buttons',
                title: 'Buttons'
            },
            {
                path: 'notification',
                title: 'Notification'
            },
            {
                path: 'tabs',
                title: 'Tabs'
            },
            {
                path: 'file-tree',
                title: 'File Tree'
            },
            {
                path: 'modals',
                title: 'Modals'
            },
            {
                path: 'progress-bar',
                title: 'ProgressBar'
            },
            /*  {
                 path: 'loading',
                 title: 'Loading'
             }, */
        ]
    },
    {
        path: 'form',
        title: 'Forms',
        children: [
            {
                path: 'form-inputs',
                title: 'Form Inputs'
            },
            {
                path: 'form-layouts',
                title: 'Form Layouts'
            },
            {
                path: 'file-upload',
                title: 'File Upload'
            },
            {
                path: 'ng2-select',
                title: 'Ng2-Select'
            }
        ]
    },


    {
        path: 'design-pattern',
        title: 'Design Pattern',
        children: [
            {
                path: 'factory-pattern',
                title: 'Factory Pattern'
            },
            {
                path: 'data-table',
                title: 'Data Table'
            }
        ]
    },
    {
        path: 'menu-levels',
        title: 'Menu Levels',
        children: [
            {
                path: 'levels1',
                title: 'Menu Level1',
                children: [
                    {
                        path: 'levels1-1',
                        title: 'Menu Level1-1'
                    }
                ]
            },
            {
                path: 'levels2',
                title: 'Menu Level2'
            }
        ]
    },

];
