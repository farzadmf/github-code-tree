const injectCss = (isCommit) => {
  $("#gct-style").remove();
  $(`<style type='text/css' id="gct-style">
    body.full-width #files {
      margin-left: 300px;
    }

    .gct-header {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    .gct-header > div {
      cursor: pointer;
    }

    .gct-file-tree {
      margin-right: 30px;
      height: 90vh;
      overflow-y: scroll;
      padding: 10px;
      position: fixed;
      width: 350px;
      z-index: 99;
    }

    /*
    .gct-file-tree {
      /* background-color: transparent; */
      border: 1px solid #ddd;
      float: left;
      left: 20px;
      overflow: auto;
      padding: 10px;
      position: sticky;
      top: ${isCommit ? 20 : 70}px;
      width: 280px;
      z-index: 28;
    }
    */

    .gct-icon {
      color: rgba(3, 47, 98, .4);
    }

    .gct-file-tree ul {
      list-style: none;
    }

    .gct-file-added {
      color: #2cbe4e;
    }

    .gct-file-removed {
      color: #cb2431;
    }

    .gct-file-changes {
      font-size: 0.7rem;
    }

    .gct-file-tree ul li {
      white-space: nowrap;
      margin-bottom: 5px;
    }

    .gct-sub-folders {
      margin-left: 15px;
      margin-top: 5px;
      display: none;
    }

    .gct-folder-open > .gct-sub-folders {
      display: block;
    }

    .gct-folder-open > .gct-folder-name > .gct-icon {
      color: rgba(3, 47, 98, .8);
    }

    .gct-folder-name {
      cursor: pointer;
    }

    .gct-file {
      display: grid;
      grid-template-columns: 14px auto;
      margin-left: -14px;
    }

    .gct-file.viewed {
      opacity:0.5;
    }

    .gct-file-name {
      cursor: pointer;
    }
  </style>`).appendTo("head");

  $("main#js-repo-pjax-container").css("padding-left", "340px");
  $("#files").css("margin-left", "0");
  $(".footer.container-xl.width-full.p-responsive").attr(
    "style",
    "padding-left: 370px !important"
  );
};

const revertCSS = () => {
  $("main#js-repo-pjax-container").css("padding-left", "");
  $("#files").css("margin-left", "0");
  $(".footer.container-xl.width-full.p-responsive").attr("style", "");
};
