

function lablegen(hook) {
    hook.doneEach(function () {
        gitalk = new Gitalk({
            clientID: '4da4ca1fa8befbc8dcb6',
            clientSecret: 'f5b55cb38dd34f6218a0974f89011d72fc4d1514',
            repo: 'ali3707.github.io',
            owner: 'ali3707',
            admin: ['ali3707'],
            id: hex_md5(window.location.pathname + window.location.hash.split('?')[0]),
            distractionFreeMode: true
        });
        // console.log(gitalk.id) 
        // console.log(gitalk)
        console.log("new gitalk")
    });
}
//
$docsify.plugins = [].concat(lablegen, $docsify.plugins);