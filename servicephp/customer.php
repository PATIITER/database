<?php
include 'config.php';
// header("Access-Control-Allow-Origin: *");
// header("Content-Type:application/json; charset = UTF-8"); 
        
        
        $_POST['Function_Name']();

        function addcustomer(){
                $Data = json_decode($_POST['_Data']);
                $NameCus = $Data->namecus;
                $telcus = $Data->telcus;
                $emailcus = $Data->emailcus;
                $conn = getDB();
                $sql_query = "INSERT INTO customer(name_customer,tel,email) VALUES ('$Namecus','$telcus','$emailcus')";
                $conn->setAttribute(POD::ERRMODE,POD::ERRMODE_EXCEPTION);
                $conn->query($sql_query);
                $rst = $conn->query($sql_query);
                $Response_Data = $rst->fetchAll(POD::FETCH_NUM);  
        }

        function getCustomerAll(){

                $Data = json_decode($_POST['_Data']);
                $conn = getDB();
                $sql_query = "SELECT * from customer";
                $conn->setAttribute(POD::ERRMODE,POD::ERRMODE_EXCEPTION);
                $conn->query($sql_query);
                $rst = $conn->query($sql_query);
                $Response_Data = $rst->fetchAll(POD::FETCH_NUM);  
                $Response_Data = json_encode($Response_Data);
                echo $Response_Data;
        }

        function getCustomerById(){

                $Data = json_decode($_POST['_Data']);
                $Idcustomer =$Data->namecus
                $conn = getDB();
                $sql_query = "SELECT * from customer where name_customer='$Namecus";
                $conn->setAttribute(POD::ERRMODE,POD::ERRMODE_EXCEPTION);
                $conn->query($sql_query);
                $rst = $conn->query($sql_query);
                $Response_Data = $rst->fetchAll(POD::FETCH_NUM);  
                $Response_Data = json_encode($Response_Data);
                echo $Response_Data;
        }

        function updateCustomer(){

                $Data = json_decode($_POST['_Data']);
                $NameCus = $Data->namecus;
                $telcus = $Data->telcus;
                $emailcus = $Data->emailcus;
                $conn = getDB();
                $sql_query = "UPDATE customer set name_customer='$NameCus',tel='$telcus',email='$emailcus' WHERE name_customer='$NameCus'"; 
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $conn->query($sql_query);
                echo '{"Finish":"update"}';
        }

        function deletecustomer(){
                $Data = json_decode($_POST['_Data']);
                $NameCus = $Data->namecus;
                $conn = getDB();
                $sql_query = "DELETE FROM customer WHERE name_customer='$NameCus'";
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $conn->query($sql_query);
                echo '{"Finish":"delete"}';    
        }

?>

