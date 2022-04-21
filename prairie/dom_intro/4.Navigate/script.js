// same as moveChild but only using text content and not the element itself
// function swapChildrenText()
// {
//     let ol = document.querySelector("ol");
//     let swap;

//     swap = ol.children[4].textContent;
//     ol.children[4].textContent = ol.children[0].textContent;
//     ol.children[0].textContent = swap;
// }


function moveChild()
{
    let ol = document.querySelector("ol")

    ol.insertBefore(ol.children[4], ol.children[0]);
}

function swapH()
{
    let sectionTwo = document.querySelector("main").children[1];
    let sectionThree = document.querySelector("main").children[2];

    sectionThree.children[0].insertBefore(sectionTwo.children[0], sectionThree.children[0].children[0]);
    sectionTwo.insertBefore(sectionThree.children[0].children[1], sectionTwo.children[0]);
    //mdr c ilizibl
}

function removeFooter()
{
    let footer = document.querySelector("footer")

    footer.remove();
}

moveChild();
swapH();
removeFooter();