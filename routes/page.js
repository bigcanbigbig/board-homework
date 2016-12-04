exports.index = function(req, res){
	res.render('pages/index', {
        ogheadTitle: '首頁內容',
    });
};