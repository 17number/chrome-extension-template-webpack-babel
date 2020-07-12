# chrome-extension-template-webpack-babel

[webpack](https://webpack.js.org/), [Babel](https://babeljs.io/) を使って良い感じに実装可能な Chrome 拡張機能のテンプレート。

- `require`, `import` 対応
- `sass` や `scss` 対応
- Hot reload with [rubenspgcavalcante/webpack-extension-reloader](https://github.com/rubenspgcavalcante/webpack-extension-reloader)

## Setup

以下のコマンドで Clone するか [ここ (Download ZIP)](https://github.com/17number/chrome-extension-template-webpack-babel/archive/master.zip) からダウンロード。

```bash
$ git clone https://github.com/17number/chrome-extension-template-webpack-babel
# git clone git@github.com:17number/chrome-extension-template-webpack-babel.git でも OK
```

Clone(or ダウンロード＆展開)後に各種パッケージをインストール。

```bash
$ npm i
```

## Development

後述の各コマンドで `dist` ディレクトリを作成後、`chrome://extensions` で「デベロッパーモード」を On にし、「パッケージ化されていない拡張機能を読み込む」で `dist` を指定することで拡張機能を有効化できる。

### Manual reload

`chrome://extensions` で手動リロードする場合は [`npm run dev`](https://github.com/17number/chrome-extension-template-webpack-babel/blob/master/package.json#L7) で OK

```bash
$ npm run dev
```

### Hot reload

Hot Reload しながら開発する場合は [`npm run watch`](https://github.com/17number/chrome-extension-template-webpack-babel/blob/master/package.json#L8) を使う

```bash
$ npm run watch
```

コマンド実行後に `chrome://extensions`、および対象の拡張機能を動作させているページ(タブ)で一度再読み込みを行う必要があるので注意。

以降はファイル更新ごとに拡張機能、および拡張機能が動作しているページが自動で更新(再読み込み)される。

### Release Build

[`npm run prod`](https://github.com/17number/chrome-extension-template-webpack-babel/blob/master/package.json#L9) で `production` モードでのビルド

[Chrome デベロッパー ダッシュボード](https://chrome.google.com/webstore/devconsole/) へのリリース前に、リリースビルド版での動作確認を行いたい場合に使用

```bash
$ npm run prod
```

`npm run watch` の後に実行しても Hot reload されないので、`chrome://extensions` で手動リロードが必要。


## Release

[`npm run release [<version>]`](https://github.com/17number/chrome-extension-template-webpack-babel/blob/master/package.json#L12) でリリースファイル(zip ファイル)の作成

```bash
$ npm run release
# output 'release/extension.zip`

$ npm run release v0.0.1
# output 'release/extension_v0.0.1.zip`
```

出力先パスやファイル名を変更したい場合は以下箇所を変更する。

- [`release.js`](https://github.com/17number/chrome-extension-template-webpack-babel/blob/master/release.js#L2): `destination`
- [`package.json`](https://github.com/17number/chrome-extension-template-webpack-babel/blob/master/package.json#L10): `mkdir:release`

## 簡単な解説

[ブログ](http://r17n.page/)に簡単な記事を書いた。

[webpack & Babel を使って Chrome 拡張機能を開発するためのテンプレート(Hot Reload 付き)](http://r17n.page/2020/07/12/chrome-extension-webpack-babel/)
