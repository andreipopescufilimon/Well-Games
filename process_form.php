<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Create an array with data to send to Discord
    $data = [
        "content" => "New Contact Form Submission",
        "embeds" => [
            [
                "title" => "Name",
                "description" => $name,
                "color" => hexdec("007BFF")
            ],
            [
                "title" => "Email",
                "description" => $email,
                "color" => hexdec("007BFF")
            ],
            [
                "title" => "Message",
                "description" => $message,
                "color" => hexdec("007BFF")
            ]
        ]
    ];

    // Convert the data to JSON
    $json_data = json_encode($data);

    // Set up cURL to send a POST request to the Discord webhook
    $ch = curl_init("webhooksecret");
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Content-Type: application/json",
    ]);

    // Execute the cURL request
    $response = curl_exec($ch);

    // Check for errors
    if ($response === false) {
        echo "Oops! Something went wrong. Please try again later.";
    } else {
        echo "Thank you! Your message has been sent successfully.";
    }

    // Close cURL session
    curl_close($ch);
} else {
    // Redirect to the contact page if accessed directly
    header("Location: contact.html");
    exit;
}
?>
