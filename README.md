# Anime startpage
Recently I watched the "Dandadan" series and felt the urge to program something about it. Then, I took inspo from other programmers who have made startpages based on animes, and I created this project just for fun in one night while listening to Dandadan's opening '[Otonoke](https://www.youtube.com/watch?v=tf9vUQgg1b4&ab_channel=CrunchyrollBrasil)' in looping on Spotify (it was so cool!).

So, I made this simple anime inspired startpage where users can set their own image, and the dominant color is automatically extracted to customize the theme of the page. This project is inspired by animes, but you can upload any image you like!

<div align="center">
  <img alt="image dark-theme" src="https://github.com/user-attachments/assets/78925e46-2181-4c15-a32b-c7119f8fab8c">
  <img alt="image light-theme" src="https://github.com/user-attachments/assets/4f219dfe-dab6-4894-aef9-01fdce285e2e">
</div>

## Getting Started

To set up your own instance of the startpage:

Clone the repository:
```
git clone https://github.com/nimilitao/anime-startpage.git

cd startpage-anime
```

Install dependencies:
```
npm install
```

Run the development server:
```
npm run dev
```

Visit the site at http://localhost:3000 to see it in action, customize anything you want, and deploy it.

Then, you need to set it up in your browser, setting the page as start page. To set your deployed startpage as the homepage or new tab page, follow the instructions for your preferred browser:

### Google Chrome
- Open Chrome and go to the settings menu (three dots on the top right).
- Scroll down to the "On Startup" section.
- Choose "Open a specific page or set of pages" and click "Add a new page".
- Enter the URL of your deployed startpage (e.g., https://your-deployed-page.com).
- Save your changes.

### Mozilla Firefox
- Open Firefox and go to the settings menu (three horizontal lines on the top right).
- Scroll down to the "Home" section.
- Under "New Windows and Tabs", choose "Custom URLs".
- Enter the URL of your deployed startpage (e.g., https://your-deployed-page.com).
- Save your changes.

### Safari
- Open Safari and go to the Safari menu in the top bar, then select "Preferences".
- Go to the "General" tab.
- In the "New windows open with" and "New tabs open with" dropdowns, select "Homepage".
- In the "Homepage" field, enter the URL of your deployed startpage (e.g., https://your-deployed-page.com).
- Close the preferences window.

## Customizability
You can adjust the bookmarks of your startpage by modifying the file src/data/sections.tsx.

For more detailed customization, feel free to explore the code and adjust as needed!

## Technologies
- [TypeScript](https://www.typescriptlang.org/)
  - [Colorthief](https://lokeshdhakar.com/projects/color-thief/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Vite](https://vitejs.dev/)
