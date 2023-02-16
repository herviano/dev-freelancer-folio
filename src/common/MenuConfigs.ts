import { OTHER_PAGES, USER_PAGES } from "../routes/path";

export const OtherMenuItems = [
    {
      title: "404",
      path: OTHER_PAGES.page404,
    },
    {
        title: "500",
        path: OTHER_PAGES.page500,
    },
];

export const UserMenuItems = [
    {
        title: "Accueil",
        path: USER_PAGES.home
    },
    {
        title: "A propos",
        path: USER_PAGES.about
    },
    {
        title: "PortFolio",
        path: USER_PAGES.portfolio
    },
    {
        title: "News",
        path: USER_PAGES.news
    },
    {
        title: "Contact",
        path: USER_PAGES.contact
    },
];

export const HeaderConfig = {
    HEIGHT: 80,
    MAX_HEIGHT: 90,
  };