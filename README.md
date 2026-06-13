# 怪談事務所｜靈校心測 部署版

這個資料夾是「怪談事務所｜靈校心測」互動網頁的 GitHub Pages 部署版本。

## 內容

- `index.html`：網站首頁入口
- `lingxiao_quiz.css`：黑金怪談檔案風格樣式
- `lingxiao_quiz.js`：互動流程、加權計算、結果顯示、複製文案
- `lingxiao_quiz_logic.json`：題目、選項、結果與加權邏輯
- `靈校.jpg`：頁面背景圖
- `前田.jpg`、`辽新.jpg`、`明堂.jpg`、`凉宛.jpg`、`杰妮.jpg`、`天柔.jpg`：結果角色圖

## 部署特性

- 純 HTML / CSS / JavaScript
- 不使用 React
- 不依賴外部 CDN
- 不使用外部圖片或字體
- 路徑皆為相對路徑
- 可直接部署到 GitHub Pages
- 若 JSON 讀取失敗，`lingxiao_quiz.js` 內有內嵌備援資料可維持測驗功能

## GitHub Pages 部署步驟

1. 在 GitHub 建立一個新的 public repository。
2. 將本資料夾內所有檔案上傳到 repository 根目錄。
3. 確認 repository 根目錄有 `index.html`。
4. 進入 repository 的 `Settings`。
5. 左側選擇 `Pages`。
6. 在 `Build and deployment` 中選擇：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
7. 按下 `Save`。
8. 等待 GitHub Pages 完成部署。
9. 回到 `Pages` 頁面，即可取得公開網址。

## 本地測試方式

可直接雙擊 `index.html` 開啟預覽。  
若要測試 JSON fetch，建議在本資料夾執行：

```bash
python3 -m http.server 8765
```

然後開啟：

```text
http://127.0.0.1:8765/
```

## 注意事項

- 不要刪除角色圖片或 `靈校.jpg`，否則部署後會缺少背景或結果卡圖片。
- 若更改題目、結果或加權邏輯，請優先修改 `lingxiao_quiz_logic.json`，再同步檢查 `lingxiao_quiz.js` 的內嵌備援資料。
- 目前版本未更動原始題目、結果與加權判定邏輯。
