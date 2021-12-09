  const open = () => {
    document.querySelector(".modal").classList.remove("hidden");
  }

  const close = () => {
    document.querySelector(".modal").classList.add("hidden");
  }

  document.querySelector(".openBtn").addEventListener("click", open);
  document.querySelector(".closeBtn").addEventListener("click", close);
	document.querySelector(".bg").addEventListener("click", close);




	const open_head = () => {
    document.querySelector(".modal_head").classList.remove("hidden_head");
  }

  const close_head = () => {
    document.querySelector(".modal_head").classList.add("hidden_head");
  }

  document.querySelector(".openBtn_head").addEventListener("click", open_head);
  document.querySelector(".closeBtn_head").addEventListener("click", close_head);
	document.querySelector(".bg_head").addEventListener("click", close_head);
	



	const open_dir = () => {
		document.querySelector(".modal_dir").classList.remove("hidden_dir");
		
  }

  const close_dir = () => {
    document.querySelector(".modal_dir").classList.add("hidden_dir");
  }

  document.querySelector(".openBtn_dir").addEventListener("click", open_dir);
  document.querySelector(".closeBtn_dir").addEventListener("click", close_dir);
	document.querySelector(".bg_dir").addEventListener("click", close_dir);
