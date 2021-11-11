const msg = document.querySelector('#msg');
const send = document.querySelector('[type=submit]');
const area = document.querySelector('article section:first-child')

send.addEventListener('click', (e) => {
  e.preventDefault();
  if (msg.value !== '') {
    sendMsg();
    reply('a7a', 'fuck');
    reply('do you love me', 'sure');

  }

  msg.value = '';
  send.style.width = '0';
  scroll_Bottom();
});


msg.addEventListener('input', () => {
  if (msg.value.split('').length > 0) {
    send.style.width = '18%';

  } else {
    send.style.width = '0';
  }
});



// FUNCTIONS

// send massage fun
function sendMsg() {
  const text = document.createElement('pre');
  let span = document.createElement('span');
  text.innerHTML = msg.value.trim();
  span.innerHTML = time();
  text.appendChild(span)
  area.appendChild(text);
}

// Reply Massages
function reply(massage, reply) {
  let span = document.createElement('span');
  const rep = document.createElement('pre');
  rep.className = 'reply';
  span.innerHTML = time();

  if (msg.value.toLowerCase().trim() == massage) {
    rep.innerHTML = reply;
  } else {
    rep.style.display = 'none';
  }

  rep.appendChild(span)
  area.appendChild(rep);
}

// Create Time In Massage
function time() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  m = m < 10 ? `0${m}` : m;
  return h > 12 ? `0${h - 12} : ${m} PM` : `${h} : ${m} AM`;
}
// Always Scroll Bottom To simulator Chat
function scroll_Bottom() {
  return area.scrollTop = area.scrollHeight;
}