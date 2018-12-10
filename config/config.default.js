exports.keys = '1'
// 添加 view 配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks'
    }
}

// 添加 news 的配置项
exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0'
}

// add middleware robot
exports.middleware = [
    'robot'
];

// robot's configurations
exports.robot = {
    ua: [
        /Baiduspider/i,
    ]
};