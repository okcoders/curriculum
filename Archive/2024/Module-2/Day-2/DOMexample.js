const document = {
    tagName: 'html',
    attributes: {
        lang: 'en'
    },
    children: [
        {
            tagName: 'head'
        },  
        {
            tagName: 'body',
            attributes: {},
            children: [
                {
                    tagName: 'div',
                    attributes: {
                        id: 'container',
                        class: 'main-container',
                    },
                    children: [
                        {
                            tagName: 'h1',
                            attributes: {
                                class: 'title',
                            },
                            children: ['Hello, World!'],
                        },
                        {
                            tagName: 'p',
                            attributes: {},
                            children: ['This is a sample paragraph.'],
                        },
                        {
                            tagName: 'ul',
                            attributes: {},
                            children: [
                                {
                                    tagName: 'li',
                                    attributes: {},
                                    children: ['Item 1'],
                                },
                                {
                                    tagName: 'li',
                                    attributes: {},
                                    children: ['Item 2'],
                                },
                                {
                                    tagName: 'li',
                                    attributes: {},
                                    children: ['Item 3'],
                                },
                            ],
                        },
                    ],
                }
            ]

        }
    ]
};
