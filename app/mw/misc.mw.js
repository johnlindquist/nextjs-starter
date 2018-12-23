import { isApiUrl, isInternalUrl } from './../helper/url';


// fetch language
const miscMw = async (req, res, next) => {

  if (isInternalUrl(req.url) || isApiUrl(req.url)) {
    next();
    return;
  }

  const redirectSource = {
    'group-planner': 'https://docs.google.com/spreadsheets/d/14cQ54pF8jhe-MJ9aMty61tjnOogtoTRL8Za69UcmQgY',
    'newsletter-repo': 'https://github.com/me-io/website-newsletter',
    'meetup-group': 'https://www.meetup.com/ME-IO-DXB',

    // links
    'community': 'https://github.com/me-io/community',
    'feedback': 'https://github.com/me-io/feedback',
    'motivation': 'https://github.com/me-io/community/issues/1',
    'group-intro': 'https://github.com/me-io/community/issues/2',
    'code-of-conduct': 'https://github.com/me-io/community/issues/3',
    'speak-at-event': 'https://github.com/me-io/community/issues/4',


    'github': 'https://github.com/me-io',
    'twitter': 'https://twitter.com/meiohq',
    'join-slack': 'https://me-io.slack.com/join/shared_invite/enQtNDg5ODMyMzM5NDExLTk5NDgzZmY3NDc1OTg2MWVlNDc2Y2U3NjQ4ODk2OTUxNGU3NDhkYmUxZDAxZmVkYTQzYzVkYmJmYmU5MGRjZTM',
    'join-telegram': 'https://t.me/joinchat/Jz2uhg51fikFEQQUCeM9WQ',
    'join-whatsapp': 'https://chat.whatsapp.com/LQmJPYRi0jM9aaV6hT2wcV',


    // todo convert this json?
    // meetups
    'gh-1': 'https://github.com/me-io/community/issues/5',
    'meetup-1/files': 'https://drive.google.com/drive/folders/1HkSSQwbR6vHXj2htRHhs-_uBLf9abe7-?usp=sharing',
    'meetup-1/feedback': 'https://goo.gl/forms/JZThHuhm7PZHEddp2',

    'gh-2': 'https://github.com/me-io/community/issues/6',
    //'meetup-2/files': 'https://drive.google.com/drive/folders/1HkSSQwbR6vHXj2htRHhs-_uBLf9abe7-?usp=sharing',
    // 'meetup-2/feedback': 'https://goo.gl/forms/JZThHuhm7PZHEddp2',
  };

  const redUrl = redirectSource[req.path.replace(/^\/+|\/+$/g, '')];
  if (redUrl) {
    res.redirect(301, redUrl);
    return;
  }

  next();
};

export { miscMw };
