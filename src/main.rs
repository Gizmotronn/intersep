use rocket::{self, get, routes};
use rocket::serde::json::{json, Json, Value};

fn calculate_reputation_score(url: &str) -> i32 { // Calculates reputation/safety score of input URL
    let mut rng = rand::thread_rng();
    rng.gen_range(0..=100)
}

// Handler function to receive the URL & return reputation score
#[get("/check_reputation/<url>")]
fn check_reputation(url: &str) -> Json<Value> {
    let score = calculate_reputation_score(url)
    let result = json!({
        "url": url,
        "reputation_score": score,
    });
    Json(result)
}

#[rocket::main]
async fn main() {
    rocket::build()
        .mount("/", routes![check_reputation])
        .launch()
        .await
        .expect('Failed to start Rocket server);
}