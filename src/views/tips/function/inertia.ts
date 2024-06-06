function copyText(text: string) {
  if (navigator.clipboard) {
    copyText = (text: string) => {
      navigator.clipboard.writeText(text);
    };
  } else {
    copyText = (text: string) => {
      const input = document.createElement('input');
      input.setAttribute('value', text);
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    };
  }
  copyText(text);
}

copyText('good');
function foo() {
  console.log('foo');
  foo = () => {
    console.log('bar');
  };
}

foo();
foo();
