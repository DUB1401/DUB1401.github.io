const plugin = {
	settings: {
		rpc: 'https://ранобэ.рф/dark-novels.ru/plugin/rpc.php',
		delay: 5000
	},
	initialize() {
		plugin.events()
		plugin.check.site()
	},
	check: {
		site() {
			if (document.location.host === 'dark-novels.ru') {
				setTimeout(plugin.check.path, plugin.settings.delay)
			}
		},
		path() {
			if (/\/read\/(\d+)\/(\d+)/.test(document.location.pathname)) {
				plugin.check.loading()
			}
		},
		loading() {
			if (document.querySelector('.v-dialog.v-dialog--persistent')?.style.display === 'none') {
				plugin.check.chapter()
			} else {
				setTimeout(plugin.check.loading, 1000)
			}
		},
		chapter() {
			let matches = document.location.pathname.match(/\/read\/(\d+)\/(\d+)/)
			if (matches && matches[1] && matches[2]) {
				let book = matches[1]
				let chapter = matches[2]
				let $canvases = document.querySelectorAll('canvas')
				if ($canvases && $canvases.length) {
					plugin.rpc('check chapter', {book, chapter}, (result) => {
						switch (result.check) {
							case 'book missing':
								plugin.notificate('Данная книга отсутствует на сервере')
								break
							case 'chapter exist':
								plugin.notificate('Данная глава уже загружена на сервер')
								break
							case 'ready to upload':
								plugin.notificate('Глава загружается на сервер...')
								let images = []
								$canvases.forEach($canvas => {
									let image = $canvas.toDataURL('image/png')
									images.push(image)
								})
								plugin.rpc('upload chapter', {
									book,
									chapter,
									images,
									title: document.querySelector('.v-breadcrumbs li:last-child')?.innerText || '',
									link: document.location.href
								}, () => {
									plugin.notificate('Глава загружена на сервер')
								})
								break
							default:
								break
						}
					})
				} else {
					plugin.notificate('Данная глава не является платной')
				}
			}
		}
	},
	notificate(message) {
		if (document.body.querySelector('.plugin-notificaction')) {
			document.body.querySelector('.plugin-notificaction').remove()
		}

		document.body.insertAdjacentHTML('beforeend', `
		<div
			class="plugin-notificaction"
			onclick="this.remove()"
			style="
				position: fixed;
				z-index: 10;
				top: 5rem;
				right: 1rem;
				width: 25rem;
				padding: 1rem 2rem;
				background-color: #606e8c;
				box-shadow: 0 0 5px #ccc;
				border-radius: 4px;
				cursor: pointer;
				font-family: sans-serif;
			">
			${message}
		</div>`
	)

	},
	events() {
		document.addEventListener('keydown', event => {
			if (event.ctrlKey && (event.keyCode === 37 || event.keyCode === 39)) {
				plugin.check.site()
			}
		})
	},
	rpc: (method, params, success, error) => {
		success = success || (() => {})
		error = error || (() => {})
		params = params || {}
		fetch(plugin.settings.rpc, {
			method: 'POST',
			body: JSON.stringify({
				jsonrpc: '2.0',
				method: method,
				params: params,
				id: null
			})
		}).then(response => {
			return response.json()
		}).then(data => {
			success(data.result)
		})
	}
}

plugin.initialize()