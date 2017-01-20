var pgDashbord = {
    winInnerWidth: window.innerWidth,
};
var pxtree = {
    id: 5,
    branch_col: '#4A4A4A', 
    branch_col_highlight: '#2D59B1',
    branch_wid_highlight: '3px',
    link_width: '1px',
    link_dasharray: '1px, 0px',
    col_pres: '#005BCC',//'#3A89EA' '#1F69C4' gene presence
    col_abse: '#E01F1F', // '#D82400' '#EA5833'; gene absence
    col_node_stroke:'#fff',
    node_color_mem: {},
    link_color_mem: {}, 
    link_width_mem: {}, 
    link_dash_mem: {},
    wid_link: '1.2px',
    wid_gloss: '3px',//gain loss highlight
};
var treeSwitch= {
    layout_vertical: 'false',
};

var backup_var= {
stroke: '#999',
'stroke-opacity': .6,
}