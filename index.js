var http = require('http'); //http 라이브러리 호출
var hostname = '127.0.0.1'; //내부아이피 내 컴퓨터주소
var port = 8080;

//http 서버를 만들어주는 명령어, 콜백함수 사용
const server = http.createServer(function (req, res) {
	const path = req.url;
	const method = req.method;
	if (path === '/products') {
		if (method === 'GET') {
			res.writeHead(200, { 'Content-Type': 'application/json' });
			const products = JSON.stringify([
				{
					name: '농구공',
					price: 5000,
				},
			]);
			res.end(products);
		} else if (method === 'POST') {
			res.end('생성되었습니다!');
		}
	}
});

server.listen(port, hostname); //요청을 기다림

console.log('grab market server on');
