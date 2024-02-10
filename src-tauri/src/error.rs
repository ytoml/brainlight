#[derive(Debug)]
pub enum Error {
    Fatal(String),
}

impl std::fmt::Display for Error {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            Error::Fatal(message) => write!(f, "Fatal error: {}", message),
        }
    }
}

impl std::error::Error for Error {}
