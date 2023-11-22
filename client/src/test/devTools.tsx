/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom/client';

export default async function devTools() {
  // Measure accessibility in DevTools
  const axe = await import('@axe-core/react');
  axe.default(React, ReactDOM, 1000);

  // Track Websocket instances
  const originalSend = WebSocket.prototype.send;
  const anyWindow = window as any;
  anyWindow.sockets = [];
  WebSocket.prototype.send = function record(...args) {
    if (anyWindow.sockets.indexOf(this) === -1) anyWindow.sockets.push(this);
    return originalSend.call(this, ...args);
  };

  // Observe when a page is entering bfcache
  window.addEventListener('pagehide', (event) => {
    console.log('!!! PAGE HIDE !!!');
    anyWindow.sockets.forEach((socket: WebSocket) => socket.close());

    if (event.persisted) {
      console.log('This page *might* be entering the bfcache.');
    } else {
      console.log('This page will unload normally and be discarded.');
    }
  });

  // Observe when a page is restored from bfcache
  window.addEventListener('pageshow', (event) => {
    console.log('!!! PAGE SHOW !!!');
    if (event.persisted) {
      console.log('This page was restored from the bfcache.');
    } else {
      console.log('This page was loaded normally.');
    }
  });
}
