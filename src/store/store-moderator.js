export default function configureModerator (store, router) {
  store.subscribe(({ type, payload }, state) => {
    switch (type) {
      case 'test/bus':
        return store.dispatch('test')
    }
  })
  store.subscribeAction()
}
