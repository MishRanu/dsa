// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
    if (str.length === 0) return;
    if (str.length === 1) return str[0];

    return str[str.length - 1] + reverse(str.slice(1, str.length - 1)) + str[0];
}

reverse('awesome'); // 'emosewa'
reverse('rithmschool'); // 'loohcsmhtir'