// ref: https://alligator.io/vuejs/jsx-render-functions/
export default {
	data: () => ({
		isRed: true
	}),

	render (h) {
		return (
			<div class={{'is-red': this.isRed}}>
				<p>Component</p>
			</div>
		)
	}
}
