import $ from '../core';


$.prototype.get = async function(url, dataType = 'json') {

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Couldnt fetch ${url} status: ${res.status}`);
    }

    switch(dataType) {
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
        case 'blob':
            return await res.blob();
    }

};


$.prototype.post = async function(url, data, dataType = 'text') {

    const res = await fetch(url, {
        method: 'POST',
        body: data
    });

    switch(dataType) {
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
        case 'blob':
            return await res.blob();
    }
};
