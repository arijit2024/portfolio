// Tab 
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.nav-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('show', 'active'));
            this.classList.add('active');
            const targetId = this.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);
            targetPane.classList.add('show', 'active');
        });
    });
});

// Experience json 
$(document).ready(function() {
    $.ajax({
        url: "./all_data/experience.json",
        type: "GET",
        dataType: "json",
        success: function(data) {
            $.each(data, function(key, value) {
                // console.log(value);
                $('#experience').append(
                    '<div class="wrapper-troble">\
                        <div class="troble">\
                            <div class="top-line"></div>\
                            <div class="circle-image"><img></div>\
                            <h2>' + value.companyName + (!value.companyUrl ? '' : ' <a href="#" target="_blank"><i class="fa-solid fa-up-right-from-square"></i></a>') +'</h2>\
                        </div>\
                        <div class="troble-type">'
                );

                $.each(value.role, function(index, role) {
                    $('#experience .wrapper-troble:last .troble-type').append(
                        '<div class="single-troble-type">\
                            <h3>' + role.roleName + '</h3>\
                            <h4>' + role.totalYear + '</h4>\
                        </div>'
                    );
                });

                $('#experience').append('</div></div>'); 
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error fetching data: " + textStatus, errorThrown);
        }
    });
});

// Education json
$(document).ready(function() {
    $.ajax({
        url: "./all_data/education.json",
        type: "GET",
        dataType: "json",
        success: function(data) {
            $.each(data, function(key, value) {
                // console.log(value);
                $('#education').append(
                    '<div class="wrapper-troble">\
                        <div class="troble">\
                            <div class="top-line"></div>\
                            <div class="circle-image"><img></div>\
                            <h2>'+value.schoolName+ (!value.schoolUrl ? '' : ' <a href="'+value.schoolUrl+'" target="_blank"><i class="fa-solid fa-up-right-from-square"></i></a>')+'</h2>\
                        </div>\
                        <div class="troble-type">\
                        <div class="single-troble-type">\
                            <h3>'+value.stream+'</h3>\
                            <h4>'+value.TotalSchoolYears+'</h4>\
                        </div>\
                        </div>\
                    </div>'
                );
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error fetching data: " + textStatus, errorThrown);
        }
    });
});

// Project json 
$(document).ready(function(){
    $.ajax({
        url: "./all_data/projects.json",
        type: "GET",
        dataType: "json",
        success: function(data){
            console.log(data);
            $.each(data, function(key, value){
                 let projectHTML = '<div class="wrapper-troble">\
                                        <div class="troble">\
                                            <div class="top-line"></div>\
                                            <div class="circle-image"><img></div>\
                                            <h2> '+value.type+ (!value.typeUrl ? '' : ' <a href='+value.typeUrl+' target="_blank"><i class="fa-solid fa-up-right-from-square"></i></a>') + '</h2>\
                                        </div>\
                                    <div class="troble-type">'
                        
                  $.each(value.project, function(i, proDts){
                     projectHTML += '<div class="single-troble-type">\
                                        <div class="project-img-wrapper">\
                                            <h3>'+proDts.projectLinkText+ (!proDts.projectUrl ? '' : ' <a href='+proDts.projectUrl+' target="_blank"> <i class="fa-solid fa-up-right-from-square"></i></a>' ) +'</h3>\
                                            <div class="project-img">\
                                                <a href="'+proDts.projectUrl+'" target="_blank">\
                                                    <img src="./assets/images/'+proDts.projectImage+'">\
                                                </a>\
                                            </div>\
                                        </div>\
                                    </div>'
                  })      
                  projectHTML += '</div>';  
                  $("#projects").append(projectHTML);    
            })
        }
    })
})
document.querySelectorAll('input[name="tabs"]').forEach((radio) => {
    radio.addEventListener('change', () => {
        const targetId = radio.id.replace('-tab', ''); // Get the corresponding tab ID
        document.querySelectorAll('.tab-pane').forEach((tab) => {
            tab.classList.remove('show', 'active'); // Hide all tabs
        });
        document.getElementById(targetId).classList.add('show', 'active'); // Show the selected tab
    });
});
