const form = document.querySelector('form')!;

function searchAddressHandler(event: Event) {
    event.preventDefault();
};

form.addeventListener('submit', searchAddressHandler);