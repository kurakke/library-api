# library-api
部活の部内図書を管理するためのサイトのバックエンド部分
## Build With
- Node.js
- Express
- TypeScript
- Docker
- Prisma
- AWS EC2
- AWS Cognito
- AWS RDS
## 開発環境の動かし方
 git pullして.envファイルを作成した後に
```
docker build -t library-api .
docker run -p 8080:8080 -d library-api 
```
