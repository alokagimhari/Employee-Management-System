getAllEmployee()
function saveUser() {
    let name = $('#exampleFormControlInput2').val();
    let address = $('#exampleFormControlInput3').val();
    let number = $('#exampleFormControlInput4').val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/user/saveUser",
        async:true,
        data:JSON.stringify({
            "empName":name,
            "empAddress":address,
            "empMobile":number
        }),
        success:function (data) {
            alert("saved")
            getAllEmployee()
        },
        error:function (xhr, exception) {
            alert("Error")
        }
    })
}

function updateUser() {
    let empID = $('#exampleFormControlInput1').val();
    let name = $('#exampleFormControlInput2').val();
    let address = $('#exampleFormControlInput3').val();
    let number = $('#exampleFormControlInput4').val();

    $.ajax({
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/user/updateUser",
        async:true,
        data:JSON.stringify({
            "empID":empID,
            "empName":name,
            "empAddress":address,
            "empMobile":number
        }),
        success:function (data) {
            alert("Updated")
            getAllEmployee()
        },
        error:function (xhr, exception) {
            alert("Error")
        }
    })
}

function deleteUser() {
    let empID = $('#exampleFormControlInput1').val();

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8080/api/v1/user/deleteEmployee/"+ empID,
        async:true,
        success:function (data) {
            alert("Deleted")
            getAllEmployee()
        },
        error:function (xhr, exception) {
            alert("Error")
        }
    })
}

function getAllEmployee() {
    let empID = $('#exampleFormControlInput1').val();

    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/user/getAllEmployees",
        async:true,
        success:function (data) {
            if(data.code==="00")
            {
                $('#empTable').empty();
                for (let emp of data.content)
                {
                    let empID = emp.empID
                    let name = emp.empName
                    let address = emp.empAddress
                    let number = emp.empMobile

                    var row = `<tr>
                        <td>${empID}</td>
                        <td>${name}</td>
                        <td>${address}</td>
                        <td>${number}</td>
                    </tr>`


                    $('#empTable').append(row);
                }
            }
            alert("Success")
        },
        error:function (xhr, exception) {
            alert("Error")
        }
    })
}

$(document).ready(function (){
    $(document).on('click','#empTable tr',function () {
        var col0 = $(this).find('td:eq(0)').text();
        var col1 = $(this).find('td:eq(1)').text();
        var col2 = $(this).find('td:eq(2)').text();
        var col3 = $(this).find('td:eq(3)').text();

        $('#exampleFormControlInput1').val(col0);
        $('#exampleFormControlInput2').val(col1);
        $('#exampleFormControlInput3').val(col2);
        $('#exampleFormControlInput4').val(col3);
    })
})

