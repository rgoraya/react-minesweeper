(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/won.0d5de60a.gif"},function(e,t,a){e.exports=a.p+"static/media/lost.ecb5925e.gif"},function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(9),r=a.n(i),o=(a(17),a(1)),l=a(2),c=a(4),u=a(3),d=a(5),m=(a(19),function(e){return s.a.createElement("header",{className:"header my-4 text-center"},s.a.createElement("h1",{className:"display-5 font-weight-light"},"Minesweeper"))}),h=a(7),f=a(6),p=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.props.result?s.a.createElement("div",{className:"\n            btn-sqaure justify-content-center border flex-fill d-flex align-items-center m-1 \n            ".concat(this.props.hasMine?"lost"===this.props.result?"text-danger visible-mine":"text-success visible-mine":"text-dark"," \n          ")},this.props.hasMine?s.a.createElement("span",{className:"oi oi-fire"}):this.props.minesAround||null):this.props.isTraversed?s.a.createElement("div",{className:"\n          btn-sqaure justify-content-center border flex-fill d-flex align-items-center m-1\n          ".concat(this.props.minesAround?"":"empty","\n          ").concat(this.colorByMinesAround(),"\n        ")},this.props.minesAround||null):s.a.createElement("button",{className:"\n          btn-sqaure btn border btn-light flex-fill rounded-0 p-0 text-center m-1 ".concat(this.props.isFlagged?"border-info":"border-dark","\n        "),onClick:function(){return e.handleSquareClick()},onContextMenu:function(t){return e.handleMineFlagging(t)}})}},{key:"handleSquareClick",value:function(){this.props.isTraversed||this.props.handleSquareClick(this.props.location)}},{key:"handleMineFlagging",value:function(e){e.preventDefault(),this.props.isTraversed||this.props.handleMineFlagging(this.props.location)}},{key:"colorByMinesAround",value:function(){switch(!0){case this.props.minesAround>1&&this.props.minesAround<3:return"text-danger";case this.props.minesAround>=3:return"text-dark-red";case 1===this.props.minesAround:default:return"text-dark"}}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={seconds:0,progress:a.props.progress},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillUpdate",value:function(e){e.progress!==this.state.progress&&this.setState({progress:e.progress})}},{key:"componentDidUpdate",value:function(e,t){if(t.progress!==this.state.progress)switch(this.state.progress){case"on":this.startTimer();break;case"off":this.stopTimer();break;case"initial":default:this.resetTimer()}}},{key:"tick",value:function(){this.setState({seconds:this.state.seconds+1})}},{key:"startTimer",value:function(){clearInterval(this.timer),this.timer=setInterval(this.tick.bind(this),1e3)}},{key:"stopTimer",value:function(){clearInterval(this.timer),this.props.onGameEnd(this.formattedTime())}},{key:"resetTimer",value:function(){clearInterval(this.timer),this.setState({seconds:0})}},{key:"formattedTime",value:function(){return new Date(1e3*this.state.seconds).toISOString().substr(11,8)}},{key:"render",value:function(){return s.a.createElement("div",{className:"timer ml-3"},this.formattedTime(),s.a.createElement("span",{className:"oi oi-clock ml-2"}))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={difficulty:a.props.difficulty},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"gamecontrols d-flex flex-row my-4 justify-content-center"},s.a.createElement("div",{className:"mr-3"},s.a.createElement("button",{className:"btn btn-link text-dark p-0",onClick:function(){return e.props.onGameReload()}},s.a.createElement("span",{className:"oi oi-reload"}))),s.a.createElement("div",{className:"form-check mx-3"},s.a.createElement("input",{className:"form-check-input",type:"radio",name:"difficulty",id:"difficultLow",value:"low",onChange:function(t){return e.difficultySwitched(t)},checked:"low"===this.state.difficulty}),s.a.createElement("label",{className:"form-check-label",htmlFor:"difficultEasy"},"Easy")),s.a.createElement("div",{className:"form-check mx-3"},s.a.createElement("input",{className:"form-check-input",type:"radio",name:"difficulty",id:"difficultyHigh",value:"high",onChange:function(t){return e.difficultySwitched(t)},checked:"high"===this.state.difficulty}),s.a.createElement("label",{className:"form-check-label",htmlFor:"difficultyHigh"},"Difficult")),s.a.createElement(g,{progress:this.props.progress,onGameEnd:this.props.onGameEnd}))}},{key:"difficultySwitched",value:function(e){var t=e.target.value;this.props.difficultySwitched(e.target.value),this.setState({difficulty:t})}}]),t}(n.Component),v=a(10),y=a.n(v),S=a(11),k=a.n(S),E={won:{backgroundImage:"url(".concat(y.a,")")},lost:{backgroundImage:"url(".concat(k.a,")")}},O=function(e){return e.result?s.a.createElement("div",{className:"celebration d-flex flex-row my-4 justify-content-center"},s.a.createElement("div",{className:"result mr-2 ".concat(e.result),style:E[e.result]}),s.a.createElement("p",null,"You ",e.result,"! Squares Revealed: ",e.squaresRevealed," | Time Taken: ",e.gameTime)):null},q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).pendingSquares=[],a.traversedSquares=[],a.state={mineLocations:a.mineLocations(a.props.boardSize,a.props.numberOfMines),traversedSquares:[],flaggedSquares:[],result:null,progress:"initial",difficulty:a.props.difficulty,boardSize:a.props.boardSize,numberOfMines:a.props.numberOfMines,gameTime:null},a.buildBoardRows=a.buildBoardRows.bind(Object(f.a)(Object(f.a)(a))),a.buildBoardColumns=a.buildBoardColumns.bind(Object(f.a)(Object(f.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleMineFlagging",value:function(e){this.setState({flaggedSquares:Object(h.a)(this.state.flaggedSquares).concat([e])})}},{key:"handleSquareClick",value:function(e){this.state.mineLocations.includes(e)?this.handleGameEnd("lost"):(this.traversedSquares=[],this.pendingSquares=[],this.pendingSquares.push(e),this.traverseBoard())}},{key:"traverseBoard",value:function(){if(this.pendingSquares.length>0){if(0===this.getMinesAround(this.pendingSquares[0])&&!this.traversedSquares.includes(this.pendingSquares[0])&&!this.state.traversedSquares.includes(this.pendingSquares[0]))for(var e=this.getNeighbors(this.pendingSquares[0]),t=0;t<e.length;t++)this.pendingSquares.includes(e[t])||this.pendingSquares.push(e[t]);return this.traversedSquares.includes(this.pendingSquares[0])||this.traversedSquares.push(this.pendingSquares[0]),this.pendingSquares.splice(0,1),void this.traverseBoard()}var a=Object(h.a)(this.state.traversedSquares).concat(Object(h.a)(this.traversedSquares));a.length>=Math.pow(this.state.boardSize,2)-this.state.mineLocations.length?this.handleGameEnd("won"):this.setState({traversedSquares:a,progress:"on"})}},{key:"getMinesAround",value:function(e){return this.getNeighbors(e,!0).length}},{key:"getNeighbors",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.state.boardSize,s=[-(n+1),-1,n-1],i=[-(n-1),1,n+1],r=[];return[-(n+1),-n,-(n-1),-1,1,n-1,n,n+1].forEach(function(o){var l=o+e;e%n===0&&i.includes(o)||(e-1)%n===0&&s.includes(o)||l>0&&l<=Math.pow(n,2)&&(!a||a&&t.state.mineLocations.includes(l))&&r.push(l)}),r}},{key:"handleGameEnd",value:function(e){this.setState({result:e,progress:"off"})}},{key:"onGameReload",value:function(){this.resetGame(this.state.difficulty,this.state.boardSize,this.state.numberOfMines)}},{key:"difficultySwitched",value:function(e){var t={low:{boardSize:9,numberOfMines:10},high:{boardSize:12,numberOfMines:20}},a=t[e].boardSize,n=t[e].numberOfMines;this.resetGame(e,a,n)}},{key:"resetGame",value:function(e,t,a){this.setState({boardSize:t,numberOfMines:a,difficulty:e,mineLocations:this.mineLocations(t,a),progress:"initial",traversedSquares:[],flaggedSquares:[],result:null})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(b,{progress:this.state.progress,difficulty:this.state.difficulty,result:this.state.result,difficultySwitched:function(t){e.difficultySwitched(t)},onGameReload:function(){return e.onGameReload()},onGameEnd:function(t){e.setState({gameTime:t})}}),this.buildBoardRows(),s.a.createElement(O,{result:this.state.result,squaresRevealed:this.state.traversedSquares.length,gameTime:this.state.gameTime}))}},{key:"mineLocations",value:function(e,t){for(var a=[];a.length<t;){var n=Math.floor(Math.random()*Math.pow(e,2))+1;a.indexOf(n)>-1||(a[a.length]=n)}return a}},{key:"buildBoardRows",value:function(){for(var e=[],t=1;t<=this.state.boardSize;t++)e.push(s.a.createElement("div",{className:"gameboard d-flex flex-row justify-content-center",key:t},this.buildBoardColumns(t)));return e}},{key:"buildBoardColumns",value:function(e){for(var t=this,a=[],n=1;n<=this.state.boardSize;n++){var i=n+(e-1)*this.state.boardSize;a.push(s.a.createElement(p,{hasMine:this.state.mineLocations.includes(i),isTraversed:this.state.traversedSquares.includes(i),isFlagged:this.state.flaggedSquares.includes(i),minesAround:this.getMinesAround(i),key:i,location:i,result:this.state.result,handleSquareClick:function(e){return t.handleSquareClick(e)},handleMineFlagging:function(e){return t.handleMineFlagging(e)}}))}return a}}]),t}(n.Component),w=function(){return s.a.createElement("div",{className:"instructions d-flex flex-row justify-content-center mt-4"},s.a.createElement("div",{className:"mr-3"},s.a.createElement("p",{className:"mb-0"},"Easy"),s.a.createElement("small",{className:"text-muted"},"Board: 9x9 | Mines: 10")),s.a.createElement("div",{className:"mx-3"},s.a.createElement("p",{className:"mb-0"},"Difficult"),s.a.createElement("small",{className:"text-muted"},"Board: 12x12 | Mines: 20")),s.a.createElement("div",{className:"ml-3"},s.a.createElement("p",{className:"mb-0"},"Flagging"),s.a.createElement("small",{className:"text-muted"},"Right click to flag squares")))},j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={boardSize:9,numberOfMines:10,difficulty:"low"},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App container"},s.a.createElement(m,null),s.a.createElement(q,{boardSize:this.state.boardSize,numberOfMines:this.state.numberOfMines,difficulty:this.state.difficulty,gameInitialized:this.state.gameInitialized,onGameStart:function(){return e.onGameStart()},onGameStop:function(){return e.onGameStop()}}),s.a.createElement(w,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,2,1]]]);
//# sourceMappingURL=main.dc0ed7dd.chunk.js.map