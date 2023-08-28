import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');
const TIME_KEY = 'videoplayer-current-time';
const player = new Player(iframeEl);
const currentTime = localStorage.getItem(TIME_KEY) || 0;

player.on('timeupdate', throttle(getCurrentTime, 1000));

setTimeToPlayer(currentTime);

function getCurrentTime(data) {
  localStorage.setItem(TIME_KEY, data.seconds);
}

function setTimeToPlayer(time) {
  player.setCurrentTime(time);
}
