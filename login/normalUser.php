<?php include 'database.php'; ?>

<?php

        $result = mysqli_query($connect,"SELECT * FROM article WHERE approved_By is not null");

// add a submit article button link to submit article page.       