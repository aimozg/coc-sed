function tab2(target: HTMLElement, group: string) {
	let j = $(target).parents(target.dataset.tabgroup);
	j.find('[data-role=tab-content].active').removeClass('active');
	j.find('[data-target=' + target.dataset.target + ']').addClass('active');
	j.find('[role=tab].active').removeClass('active');
	target.classList.add('active');
}