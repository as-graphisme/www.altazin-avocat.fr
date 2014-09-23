(function(window) {
	'use strict';

	$('.lien-article').on('click', function() {
		var lienArticleEnCours = $(this);
		var identifier = lienArticleEnCours.data('article-identifier');

		$('.article-en-cours').removeClass('article-en-cours');
		$('.lien-article-actif').removeClass('lien-article-actif');

		$('article[data-article-identifier="' + identifier + '"]').addClass('article-en-cours');
		lienArticleEnCours.addClass('lien-article-actif');

		window.location.hash = lienArticleEnCours.attr('href');
	});

	$('.menu-bascule').on('click', function() {
		var basculeMenu = $(this);

		$('.menu-actif').removeClass('menu-actif');

		var menu = basculeMenu.closest('.menu');

		menu.addClass('menu-actif');

		$('.lien-article-principal-du-menu', menu).click();
	});

	var lienArticleEnCours = $('[href="' + window.location.hash + '"]');

	if (lienArticleEnCours.length) {
		lienArticleEnCours.click();

		$('.menu-actif').removeClass('menu-actif');

		var menu = lienArticleEnCours.closest('.menu');

		menu.addClass('menu-actif');
	};
}) (window);
