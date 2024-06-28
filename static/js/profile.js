function triggerWebhook(data) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/increase/'); 
    xhr.setRequestHeader('Content-Type', 'application/json'); 
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log('Webhook activated successfully!');
      } else {
        console.error('Error activating webhook:', xhr.statusText);
      }
    };
    xhr.send(JSON.stringify({'data' : data}));
  }