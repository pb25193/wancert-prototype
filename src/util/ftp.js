
const downloadJsonWithFilename = (obj, filename) => {
    const data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
    const href = "data:" + data;
    const link = document.createElement('a');
    link.href = href;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// also add upload helpers here!

export { downloadJsonWithFilename };