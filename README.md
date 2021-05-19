# URL shortener 網頁縮址器
使用Express製作的網址縮址服務

## 首頁
![Webpicture](/public/index.jpg)

## 成功頁
![Webpicture](/public/shortenSuccess.jpg)

## 功能
1. 使用者可以輸入網址獲得隨機縮址
2. 使用者可以一鍵複製縮址

## 環境與套件
* 環境：[Node.js](https://nodejs.org/en/)
* 框架：[Express](https://expressjs.com/)
* CDN：[Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
* 套件：[mongoose](https://mongoosejs.com/)
* 資料庫：[mongodb](https://www.mongodb.com/)


## 安裝與執行步驟
1. 使用終端機，clone此專案到local位置


        git clone https://github.com/tim80411/url-shortener
2. 使用終端機，進入此專案所在的資料夾


        cd expense-tracker

3. 安裝套件


        npm install
4. 安裝mongodb並在mongodb內建立資料庫url-shortener
5. 新增種子資料


        npm run seed

6. 啟動伺服器


        npm run dev
7. 看到以下字樣代表成功啟動並監聽server以及成功連上資料庫


        this app is running on http://localhost:3000
        mongodb success!

    在任一瀏覽器輸入localhost:3000即可進入網站
8. 若想啟用heroku請輸入兩個config Vars


        MONGODB_URL：<mongodb connect string>
        DOMAIN：<heroku domain name>

        





