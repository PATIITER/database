<?php
        // header("Access-Control-Allow-Origin: *");
        // header("Content-Type:application/json; charset = UTF-8"); 
        
        include 'config.php';

        $_POST['Function_Name']();

        function addcustomer(){
                $Data = json_decode($_POST['_Data']);
                $NameCus = $Data->name_customer;
                $telcus = $Data->tel ;
                $emailcus = $Data->email ;
                $conn = getDB();

                $sql_query = "INSERT INTO customer(name_customer,tel,email) VALUES ('$NameCus','$telcus','$emailcus')";

                $conn->setAttribute(POD::ERRMODE,POD::ERRMODE_EXCEPTION);
                $conn->query($sql_query);
        }
                        // $sql = "SELECT * FROM customer";
                        // $result = mysqli_query($con,$sql);
                        // $arr = array();
                        // while($row = mysqli_fetch_assoc($result)){
                        //         $arr[] =$row;
                        // }
                        // mysqli_close($con);
                        // echo json_encode($arr);


?>

