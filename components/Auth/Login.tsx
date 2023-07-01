import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

export default function Auth() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    async function signInWithEmail() {
        setLoading(true);
    }
}