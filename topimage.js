myImageCnt = 14;
myImage = new Array("http://linker.in/images/mainmersy110107.jpg","http://linker.in/images/mainmersy100412.jpg","http://linker.in/images/mainmersy100208.jpg","http://linker.in/images/mainmersy100208-02.jpg","http://linker.in/images/maincrema100111.jpg","http://linker.in/images/maincrema100110.jpg","http://linker.in/images/mainmersy090709.jpg","http://linker.in/images/takuwork_image_006.jpg","http://linker.in/images/takuwork_image_005.jpg","http://linker.in/images/takuwork_image_004.jpg","http://linker.in/images/takuwork_image_003.jpg","http://linker.in/topimages/images/maincrema090323.jpg","http://linker.in/topimages/images/takuwork_image_001.jpg","http://linker.in/topimages/images/maincrema090208.jpg");
myRnd = Math.floor(Math.random()*myImageCnt);
document.write("<p class='topimg'><img src='",myImage[myRnd],"' alt='linkerは「人と人」「人と情報」「人と物」をつなぐデザインユニットです。' width='900' height='299' /></p>");


