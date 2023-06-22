# ベースイメージの指定
FROM node:14.17.0

# コンテナ内の作業ディレクトリの設定
WORKDIR /usr/src/app

# package.jsonとpackage-lock.jsonをコピーして依存関係をインストール
COPY package*.json ./
RUN npm install

# TypeScriptのインストール
RUN npm install -g typescript

# アプリケーションのソースコードをコピー
COPY . .

RUN npx prisma generate

# TypeScriptのビルド
RUN npm run build

# エントリポイントの指定
CMD [ "node", "dist/index.js" ]