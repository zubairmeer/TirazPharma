	const foot = document.querySelector('.footer')
	fetch('/Users/zubair/Desktop/Tiraz/footer.html')
	.then(res=>res.text())
	.then(data=>{
		foot.innerHTML=data
	})