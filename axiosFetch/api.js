axios('api.json')
    .then(response => carregaJson(response.data))
