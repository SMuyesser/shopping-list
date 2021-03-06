var state = {
	items: []
};

var addItem = function(state, item) {
	state.items.push(item)
};

var renderList = function(state, element) {
	var htmlSnippet1 = '<li><span class="shopping-item">';
	var htmlSnippet2 = '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';
	var itemsHTML = state.items.map(function(item) {
		return htmlSnippet1 + item + htmlSnippet2;
	});
	element.html(itemsHTML);
};

$('body').on('click', 'button.shopping-item-toggle', function(event) {
	$(this).parent().siblings().toggleClass('shopping-item__checked');
});

$('body').on('click', 'button.shopping-item-delete', function(event) {
	$(this).closest('li').remove();
});


$('body').on('submit', '#js-shopping-list-form', function(event) {
	event.preventDefault();
	addItem(state, $('.shopping-list-entry').val());
	renderList(state, $('.shopping-list'));
});