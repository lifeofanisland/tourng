//
exports.overview = function () {
    //
    return '<div class="col-sm-6">\
        <div class="panel b-a">\
        <div class="row m-n">\
        <div class="col-md-6 b-b b-r"><a href="#" class="block padder-v hover">\
        <span class="i-s i-s-2x pull-left m-r-sm"> <i\
    class="i i-hexagon2 i-s-base text-danger hover-rotate"></i> <i\
    class="i i-plus2 i-1x text-white"></i> </span> <span\
    class="clear"> <span\
    class="h3 block m-t-xs text-danger">2,000</span> <small\
    class="text-muted text-u-c">New Visits</small> </span> </a>\
    </div>\
    <div class="col-md-6 b-b"><a href="#" class="block padder-v hover">\
        <span class="i-s i-s-2x pull-left m-r-sm"> <i\
    class="i i-hexagon2 i-s-base text-success-lt hover-rotate"></i> <i\
    class="i i-users2 i-sm text-white"></i> </span> <span\
    class="clear"> <span\
    class="h3 block m-t-xs text-success">75%</span> <small\
    class="text-muted text-u-c">Bounce rate</small> </span> </a>\
    </div>\
    <div class="col-md-6 b-b b-r"><a href="#" class="block padder-v hover">\
        <span class="i-s i-s-2x pull-left m-r-sm"> <i\
    class="i i-hexagon2 i-s-base text-info hover-rotate"></i> <i\
    class="i i-location i-sm text-white"></i> </span> <span\
    class="clear"> <span class="h3 block m-t-xs text-info">25 <span\
    class="text-sm">m</span></span> <small\
    class="text-muted text-u-c">location</small> </span> </a></div>\
        <div class="col-md-6 b-b"><a href="#" class="block padder-v hover">\
        <span class="i-s i-s-2x pull-left m-r-sm"> <i\
    class="i i-hexagon2 i-s-base text-primary hover-rotate"></i> <i\
    class="i i-alarm i-sm text-white"></i> </span> <span\
    class="clear"> <span\
    class="h3 block m-t-xs text-primary">100</span> <small\
    class="text-muted text-u-c">Notification</small> </span> </a></div>\
        </div>\
        </div>\
        ';
}
//
exports.addplace = function () {
    //
    return '<section class="panel panel-default">' +
        ' <header class="panel-heading font-bold"> Add Place </header> ' +
        '<div class="panel-body"> <form class="form-horizontal" action="" method="post"> ' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Title</label> ' +
        '<div class="col-sm-10"> <input type="text" name="title" class="form-control rounded"> </div></div>' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Description</label> ' +
        '<div class="col-sm-10"> <div class="btn-toolbar m-b-sm btn-editor" data-role="editor-toolbar" data-target="#editor"> <div class="btn-group"> <a class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" title="Font"><i class="fa fa-font"></i><b class="caret"></b></a> <ul class="dropdown-menu"> </ul> </div> <div class="btn-group"> <a class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" title="Font Size"><i class="fa fa-text-height"></i>&nbsp;<b class="caret"></b></a> <ul class="dropdown-menu"> <li><a data-edit="fontSize 5"><font size="5">Huge</font></a></li> <li><a data-edit="fontSize 3"><font size="3">Normal</font></a></li> <li><a data-edit="fontSize 1"><font size="1">Small</font></a></li> </ul> </div> <div class="btn-group"> <a class="btn btn-default btn-sm" data-edit="bold" title="Bold (Ctrl/Cmd+B)"><i class="fa fa-bold"></i></a> <a class="btn btn-default btn-sm" data-edit="italic" title="Italic (Ctrl/Cmd+I)"><i class="fa fa-italic"></i></a> <a class="btn btn-default btn-sm" data-edit="strikethrough" title="Strikethrough"><i class="fa fa-strikethrough"></i></a> <a class="btn btn-default btn-sm" data-edit="underline" title="Underline (Ctrl/Cmd+U)"><i class="fa fa-underline"></i></a> </div> <div class="btn-group"> <a class="btn btn-default btn-sm" data-edit="insertunorderedlist" title="Bullet list"><i class="fa fa-list-ul"></i></a> <a class="btn btn-default btn-sm" data-edit="insertorderedlist" title="Number list"><i class="fa fa-list-ol"></i></a> <a class="btn btn-default btn-sm" data-edit="outdent" title="Reduce indent (Shift+Tab)"><i class="fa fa-dedent"></i></a> <a class="btn btn-default btn-sm" data-edit="indent" title="Indent (Tab)"><i class="fa fa-indent"></i></a> </div> <div class="btn-group"> <a class="btn btn-default btn-sm" data-edit="justifyleft" title="Align Left (Ctrl/Cmd+L)"><i class="fa fa-align-left"></i></a> <a class="btn btn-default btn-sm" data-edit="justifycenter" title="Center (Ctrl/Cmd+E)"><i class="fa fa-align-center"></i></a> <a class="btn btn-default btn-sm" data-edit="justifyright" title="Align Right (Ctrl/Cmd+R)"><i class="fa fa-align-right"></i></a> <a class="btn btn-default btn-sm" data-edit="justifyfull" title="Justify (Ctrl/Cmd+J)"><i class="fa fa-align-justify"></i></a> </div> <div class="btn-group"> <a class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" title="Hyperlink"><i class="fa fa-link"></i></a> <div class="dropdown-menu"> <div class="input-group m-l-xs m-r-xs"> <input class="form-control input-sm" placeholder="URL" type="text" data-edit="createLink"/> <div class="input-group-btn"> <button class="btn btn-default btn-sm" type="button">Add</button> </div> </div> </div> <a class="btn btn-default btn-sm" data-edit="unlink" title="Remove Hyperlink"><i class="fa fa-cut"></i></a> </div> <div class="btn-group hide"> <a class="btn btn-default btn-sm" title="Insert picture (or just drag & drop)" id="pictureBtn"><i class="fa fa-picture-o"></i></a> <input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" /> </div> <div class="btn-group"> <a class="btn btn-default btn-sm" data-edit="undo" title="Undo (Ctrl/Cmd+Z)"><i class="fa fa-undo"></i></a> <a class="btn btn-default btn-sm" data-edit="redo" title="Redo (Ctrl/Cmd+Y)"><i class="fa fa-repeat"></i></a> </div> </div> <div id="editor" name="description" class="form-control" style="overflow:scroll;height:150px;max-height:150px"> </div> </div> </div> <div class="line line-dashed b-b line-lg pull-in"></div>' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Activities</label> ' +
        '<div class="col-sm-10"> <input type="text" name="activities" class="form-control rounded"> </div></div>' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Contact</label> ' +
        '<div class="col-sm-10"> <input type="text" name="contact" class="form-control rounded"> </div></div>' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Address</label> ' +
        '<div class="col-sm-10"> <input type="text" name="address" class="form-control rounded"> </div></div>' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Thumbnails</label> ' +
        '<div class="col-sm-10"> <input type="file" name="picture" class="form-control rounded" multiple accept="image/*"> </div></div>' +
        '<div class="line line-dashed b-b line-lg pull-in"></div> <div class="form-group"> <div class="col-sm-4 col-sm-offset-2"> <button type="submit" class="btn btn-primary">Save</button> </div> </div> </form> </div> </section>';

}
//
exports.addbeach = function () {
    //
    return '<section class="panel panel-default">' +
        ' <header class="panel-heading font-bold"> Add Beach </header> ' +
        '<div class="panel-body"> <form class="form-horizontal" action="" method="post"> ' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Title</label> ' +
        '<div class="col-sm-10"> <input type="text" name="title" class="form-control rounded"> </div></div>' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Description</label> ' +
        '<div class="col-sm-10"> <div class="btn-toolbar m-b-sm btn-editor" data-role="editor-toolbar" data-target="#editor"> <div class="btn-group"> <a class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" title="Font"><i class="fa fa-font"></i><b class="caret"></b></a> <ul class="dropdown-menu"> </ul> </div> <div class="btn-group"> <a class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" title="Font Size"><i class="fa fa-text-height"></i>&nbsp;<b class="caret"></b></a> <ul class="dropdown-menu"> <li><a data-edit="fontSize 5"><font size="5">Huge</font></a></li> <li><a data-edit="fontSize 3"><font size="3">Normal</font></a></li> <li><a data-edit="fontSize 1"><font size="1">Small</font></a></li> </ul> </div> <div class="btn-group"> <a class="btn btn-default btn-sm" data-edit="bold" title="Bold (Ctrl/Cmd+B)"><i class="fa fa-bold"></i></a> <a class="btn btn-default btn-sm" data-edit="italic" title="Italic (Ctrl/Cmd+I)"><i class="fa fa-italic"></i></a> <a class="btn btn-default btn-sm" data-edit="strikethrough" title="Strikethrough"><i class="fa fa-strikethrough"></i></a> <a class="btn btn-default btn-sm" data-edit="underline" title="Underline (Ctrl/Cmd+U)"><i class="fa fa-underline"></i></a> </div> <div class="btn-group"> <a class="btn btn-default btn-sm" data-edit="insertunorderedlist" title="Bullet list"><i class="fa fa-list-ul"></i></a> <a class="btn btn-default btn-sm" data-edit="insertorderedlist" title="Number list"><i class="fa fa-list-ol"></i></a> <a class="btn btn-default btn-sm" data-edit="outdent" title="Reduce indent (Shift+Tab)"><i class="fa fa-dedent"></i></a> <a class="btn btn-default btn-sm" data-edit="indent" title="Indent (Tab)"><i class="fa fa-indent"></i></a> </div> <div class="btn-group"> <a class="btn btn-default btn-sm" data-edit="justifyleft" title="Align Left (Ctrl/Cmd+L)"><i class="fa fa-align-left"></i></a> <a class="btn btn-default btn-sm" data-edit="justifycenter" title="Center (Ctrl/Cmd+E)"><i class="fa fa-align-center"></i></a> <a class="btn btn-default btn-sm" data-edit="justifyright" title="Align Right (Ctrl/Cmd+R)"><i class="fa fa-align-right"></i></a> <a class="btn btn-default btn-sm" data-edit="justifyfull" title="Justify (Ctrl/Cmd+J)"><i class="fa fa-align-justify"></i></a> </div> <div class="btn-group"> <a class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" title="Hyperlink"><i class="fa fa-link"></i></a> <div class="dropdown-menu"> <div class="input-group m-l-xs m-r-xs"> <input class="form-control input-sm" placeholder="URL" type="text" data-edit="createLink"/> <div class="input-group-btn"> <button class="btn btn-default btn-sm" type="button">Add</button> </div> </div> </div> <a class="btn btn-default btn-sm" data-edit="unlink" title="Remove Hyperlink"><i class="fa fa-cut"></i></a> </div> <div class="btn-group hide"> <a class="btn btn-default btn-sm" title="Insert picture (or just drag & drop)" id="pictureBtn"><i class="fa fa-picture-o"></i></a> <input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" /> </div> <div class="btn-group"> <a class="btn btn-default btn-sm" data-edit="undo" title="Undo (Ctrl/Cmd+Z)"><i class="fa fa-undo"></i></a> <a class="btn btn-default btn-sm" data-edit="redo" title="Redo (Ctrl/Cmd+Y)"><i class="fa fa-repeat"></i></a> </div> </div> <div id="editor" name="description" class="form-control" style="overflow:scroll;height:150px;max-height:150px"> </div> </div> </div> <div class="line line-dashed b-b line-lg pull-in"></div>' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Address</label> ' +
        '<div class="col-sm-10"> <input type="text" name="address" class="form-control rounded"> </div></div>' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Thumbnails</label> ' +
        '<div class="col-sm-10"> <input type="file" name="picture" class="form-control rounded" multiple accept="image/*"> </div></div>' +
        '<div class="line line-dashed b-b line-lg pull-in"></div> <div class="form-group"> <div class="col-sm-4 col-sm-offset-2"> <button type="submit" class="btn btn-primary">Save</button> </div> </div> </form> </div> </section>';

}
//
exports.addevent = function () {
    //
    return '<section class="panel panel-default">' +
        ' <header class="panel-heading font-bold"> Add Event </header> ' +
        '<div class="panel-body"> <form class="form-horizontal" action="" method="post"> ' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Title</label> ' +
        '<div class="col-sm-10"> <input type="text" name="title" class="form-control rounded"> </div></div>' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Description</label> ' +
        '<div class="col-sm-10"> <div class="btn-toolbar m-b-sm btn-editor" data-role="editor-toolbar" data-target="#editor"> <div class="btn-group"> <a class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" title="Font"><i class="fa fa-font"></i><b class="caret"></b></a> <ul class="dropdown-menu"> </ul> </div> <div class="btn-group"> <a class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" title="Font Size"><i class="fa fa-text-height"></i>&nbsp;<b class="caret"></b></a> <ul class="dropdown-menu"> <li><a data-edit="fontSize 5"><font size="5">Huge</font></a></li> <li><a data-edit="fontSize 3"><font size="3">Normal</font></a></li> <li><a data-edit="fontSize 1"><font size="1">Small</font></a></li> </ul> </div> <div class="btn-group"> <a class="btn btn-default btn-sm" data-edit="bold" title="Bold (Ctrl/Cmd+B)"><i class="fa fa-bold"></i></a> <a class="btn btn-default btn-sm" data-edit="italic" title="Italic (Ctrl/Cmd+I)"><i class="fa fa-italic"></i></a> <a class="btn btn-default btn-sm" data-edit="strikethrough" title="Strikethrough"><i class="fa fa-strikethrough"></i></a> <a class="btn btn-default btn-sm" data-edit="underline" title="Underline (Ctrl/Cmd+U)"><i class="fa fa-underline"></i></a> </div> <div class="btn-group"> <a class="btn btn-default btn-sm" data-edit="insertunorderedlist" title="Bullet list"><i class="fa fa-list-ul"></i></a> <a class="btn btn-default btn-sm" data-edit="insertorderedlist" title="Number list"><i class="fa fa-list-ol"></i></a> <a class="btn btn-default btn-sm" data-edit="outdent" title="Reduce indent (Shift+Tab)"><i class="fa fa-dedent"></i></a> <a class="btn btn-default btn-sm" data-edit="indent" title="Indent (Tab)"><i class="fa fa-indent"></i></a> </div> <div class="btn-group"> <a class="btn btn-default btn-sm" data-edit="justifyleft" title="Align Left (Ctrl/Cmd+L)"><i class="fa fa-align-left"></i></a> <a class="btn btn-default btn-sm" data-edit="justifycenter" title="Center (Ctrl/Cmd+E)"><i class="fa fa-align-center"></i></a> <a class="btn btn-default btn-sm" data-edit="justifyright" title="Align Right (Ctrl/Cmd+R)"><i class="fa fa-align-right"></i></a> <a class="btn btn-default btn-sm" data-edit="justifyfull" title="Justify (Ctrl/Cmd+J)"><i class="fa fa-align-justify"></i></a> </div> <div class="btn-group"> <a class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" title="Hyperlink"><i class="fa fa-link"></i></a> <div class="dropdown-menu"> <div class="input-group m-l-xs m-r-xs"> <input class="form-control input-sm" placeholder="URL" type="text" data-edit="createLink"/> <div class="input-group-btn"> <button class="btn btn-default btn-sm" type="button">Add</button> </div> </div> </div> <a class="btn btn-default btn-sm" data-edit="unlink" title="Remove Hyperlink"><i class="fa fa-cut"></i></a> </div> <div class="btn-group hide"> <a class="btn btn-default btn-sm" title="Insert picture (or just drag & drop)" id="pictureBtn"><i class="fa fa-picture-o"></i></a> <input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" /> </div> <div class="btn-group"> <a class="btn btn-default btn-sm" data-edit="undo" title="Undo (Ctrl/Cmd+Z)"><i class="fa fa-undo"></i></a> <a class="btn btn-default btn-sm" data-edit="redo" title="Redo (Ctrl/Cmd+Y)"><i class="fa fa-repeat"></i></a> </div> </div> <div id="editor" name="description" class="form-control" style="overflow:scroll;height:150px;max-height:150px"> </div> </div> </div> <div class="line line-dashed b-b line-lg pull-in"></div>' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Activities</label> ' +
        '<div class="col-sm-10"> <input type="text" name="activities" class="form-control rounded"> </div></div>' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Attraction</label> ' +
        '<div class="col-sm-10"> <input type="text" name="contact" class="form-control rounded"> </div></div>' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Address</label> ' +
        '<div class="col-sm-10"> <input type="text" name="address" class="form-control rounded"> </div></div>' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Thumbnails</label> ' +
        '<div class="col-sm-10"> <input type="file" name="picture" class="form-control rounded" multiple accept="image/*"> </div></div>' +
        '<div class="line line-dashed b-b line-lg pull-in"></div> <div class="form-group"> <div class="col-sm-4 col-sm-offset-2"> <button type="submit" class="btn btn-primary">Save</button> </div> </div> </form> </div> </section>';

}
//
exports.adddeal = function () {
    //
    return '<section class="panel panel-default">' +
        ' <header class="panel-heading font-bold"> Add Deal </header> ' +
        '<div class="panel-body"> <form class="form-horizontal" action="" method="post"> ' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Title</label> ' +
        '<div class="col-sm-10"> <input type="text" name="title" class="form-control rounded"> </div></div>' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Description</label> ' +
        '<div class="col-sm-10"> <div class="btn-toolbar m-b-sm btn-editor" data-role="editor-toolbar" data-target="#editor"> <div class="btn-group"> <a class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" title="Font"><i class="fa fa-font"></i><b class="caret"></b></a> <ul class="dropdown-menu"> </ul> </div> <div class="btn-group"> <a class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" title="Font Size"><i class="fa fa-text-height"></i>&nbsp;<b class="caret"></b></a> <ul class="dropdown-menu"> <li><a data-edit="fontSize 5"><font size="5">Huge</font></a></li> <li><a data-edit="fontSize 3"><font size="3">Normal</font></a></li> <li><a data-edit="fontSize 1"><font size="1">Small</font></a></li> </ul> </div> <div class="btn-group"> <a class="btn btn-default btn-sm" data-edit="bold" title="Bold (Ctrl/Cmd+B)"><i class="fa fa-bold"></i></a> <a class="btn btn-default btn-sm" data-edit="italic" title="Italic (Ctrl/Cmd+I)"><i class="fa fa-italic"></i></a> <a class="btn btn-default btn-sm" data-edit="strikethrough" title="Strikethrough"><i class="fa fa-strikethrough"></i></a> <a class="btn btn-default btn-sm" data-edit="underline" title="Underline (Ctrl/Cmd+U)"><i class="fa fa-underline"></i></a> </div> <div class="btn-group"> <a class="btn btn-default btn-sm" data-edit="insertunorderedlist" title="Bullet list"><i class="fa fa-list-ul"></i></a> <a class="btn btn-default btn-sm" data-edit="insertorderedlist" title="Number list"><i class="fa fa-list-ol"></i></a> <a class="btn btn-default btn-sm" data-edit="outdent" title="Reduce indent (Shift+Tab)"><i class="fa fa-dedent"></i></a> <a class="btn btn-default btn-sm" data-edit="indent" title="Indent (Tab)"><i class="fa fa-indent"></i></a> </div> <div class="btn-group"> <a class="btn btn-default btn-sm" data-edit="justifyleft" title="Align Left (Ctrl/Cmd+L)"><i class="fa fa-align-left"></i></a> <a class="btn btn-default btn-sm" data-edit="justifycenter" title="Center (Ctrl/Cmd+E)"><i class="fa fa-align-center"></i></a> <a class="btn btn-default btn-sm" data-edit="justifyright" title="Align Right (Ctrl/Cmd+R)"><i class="fa fa-align-right"></i></a> <a class="btn btn-default btn-sm" data-edit="justifyfull" title="Justify (Ctrl/Cmd+J)"><i class="fa fa-align-justify"></i></a> </div> <div class="btn-group"> <a class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" title="Hyperlink"><i class="fa fa-link"></i></a> <div class="dropdown-menu"> <div class="input-group m-l-xs m-r-xs"> <input class="form-control input-sm" placeholder="URL" type="text" data-edit="createLink"/> <div class="input-group-btn"> <button class="btn btn-default btn-sm" type="button">Add</button> </div> </div> </div> <a class="btn btn-default btn-sm" data-edit="unlink" title="Remove Hyperlink"><i class="fa fa-cut"></i></a> </div> <div class="btn-group hide"> <a class="btn btn-default btn-sm" title="Insert picture (or just drag & drop)" id="pictureBtn"><i class="fa fa-picture-o"></i></a> <input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" /> </div> <div class="btn-group"> <a class="btn btn-default btn-sm" data-edit="undo" title="Undo (Ctrl/Cmd+Z)"><i class="fa fa-undo"></i></a> <a class="btn btn-default btn-sm" data-edit="redo" title="Redo (Ctrl/Cmd+Y)"><i class="fa fa-repeat"></i></a> </div> </div> <div id="editor" name="description" class="form-control" style="overflow:scroll;height:150px;max-height:150px"> </div> </div> </div> <div class="line line-dashed b-b line-lg pull-in"></div>' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Organizer</label> ' +
        '<div class="col-sm-10"> <input type="text" name="activities" class="form-control rounded"> </div></div>' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Date</label> ' +
        '<div class="col-sm-10"> <input type="text" name="date" class="form-control rounded"> </div></div>' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Price</label> ' +
        '<div class="col-sm-10"> <input type="text" name="price" class="form-control rounded"> </div></div>' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Required Attendees</label> ' +
        '<div class="col-sm-10"> <input type="text" name="attendees" class="form-control rounded"> </div></div>' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Activities & Attractions</label> ' +
        '<div class="col-sm-10"> <input type="text" name="activities" class="form-control rounded"> </div></div>' +
        '<div class="form-group"> <label class="col-sm-2 control-label">Thumbnails</label> ' +
        '<div class="col-sm-10"> <input type="file" name="picture" class="form-control rounded" multiple accept="image/*"> </div></div>' +
        '<div class="line line-dashed b-b line-lg pull-in"></div> <div class="form-group"> <div class="col-sm-4 col-sm-offset-2"> <button type="submit" class="btn btn-primary">Save</button> </div> </div> </form> </div> </section>';

}
